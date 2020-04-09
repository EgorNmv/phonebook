import {Resolver, Query, Arg, Mutation, Args} from "type-graphql";
import {plainToClass} from "class-transformer";
import {UserType} from "../types/userType";
import {usersData} from "../../data/usersData";
import {AddUserInput, TestArgs} from "../inputs/addUserInput";
import {UpdateUserInput} from "../inputs/updateUserInput";

@Resolver((of) => UserType)
export class UserResolver {
    private items: UserType[] = (() => (plainToClass(UserType, usersData)))();

    @Query(() => UserType,
        {
            nullable: true,
            description: "Get user by id in phone book"
        }
    )
    user(@Arg("id") id: number): UserType | undefined {
        return this.items.find(user => user.id === id);
    }

    @Query(() => [UserType],
        {description: "Get all users in phone book"}
    )
    users(): UserType[] {
        return this.items;
    }

    @Mutation(() => UserType)
    addUser(@Arg("user"){
        firstName,
        secondName,
        phone,
        cabinet,
        post,
        internalPhone
    }: AddUserInput): UserType {
        const user = plainToClass(UserType, {
            id: this.items.length,
            firstName,
            secondName,
            phone,
            cabinet,
            post,
            internalPhone,
        });
        this.items.push(user);
        return user;
    };

    @Mutation(() => UserType, {nullable: true})
    updateUser(@Args(){
        id,
        firstName,
        secondName,
        phone,
        cabinet,
        post,
        internalPhone
    }: UpdateUserInput): UserType | undefined {
        let updatedUser: UserType;

        this.items = this.items.map(user => {
            if (user.id === id) {
                updatedUser = user;
                if (firstName) {
                    updatedUser.firstName = firstName;
                }
                if (secondName) {
                    updatedUser.secondName = secondName;
                }
                if (phone) {
                    updatedUser.phone = phone;
                }
                if (cabinet) {
                    updatedUser.cabinet = cabinet;
                }
                if (post) {
                    updatedUser.post = post;
                }
                if (internalPhone) {
                    updatedUser.internalPhone = internalPhone;
                }
                return updatedUser;
            } else {
                return user
            }
        });
        return updatedUser;
    }

    @Mutation(() => UserType, {nullable: true})
    deleteUser(@Arg("id")id: number): UserType | undefined {
        let deletedUser: UserType;

        this.items = this.items.filter(user => {
            if (user.id === id) {
                deletedUser = user;
                return false;
            }
            return true;
        });

        return deletedUser;
    }
}