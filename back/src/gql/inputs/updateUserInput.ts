import {UserType} from "../types/userType";
import {Field, Int, Float, ArgsType, ID} from "type-graphql";
import {Min, Max, MinLength, MaxLength} from "class-validator";

@ArgsType()
export class UpdateUserInput implements Partial<UserType> {

    @Field(() => ID)
    id: number;

    @Field({nullable: true})
    firstName?: string;

    @Field({nullable: true})
    secondName?: string;

    @Field(() => Float, {nullable: true})
    @Min(80000000000)
    @Max(89999999999)
    phone?: number;

    @Field(() => Int, {nullable: true})
    @Min(1)
    @Max(500)
    cabinet?: number;

    @Field({nullable: true})
    @MinLength(5)
    @MaxLength(30)
    post?: string;

    @Field(() => Int, {nullable: true})
    @Min(100)
    @Max(1000)
    internalPhone?: number;
}