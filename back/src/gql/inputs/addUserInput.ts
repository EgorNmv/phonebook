import {UserType} from "../types/userType";
import {InputType, Field, Int, Float, ArgsType} from "type-graphql";
import {Min, Max, MinLength, MaxLength} from "class-validator";

@InputType()
export class AddUserInput implements Partial<UserType> {

    @Field()
    firstName: string;

    @Field()
    secondName: string;

    @Field(() => Float)
    @Min(80000000000)
    @Max(89999999999)
    phone: number;

    @Field(() => Int)
    @Min(1)
    @Max(500)
    cabinet: number;

    @Field({nullable: true})
    @MinLength(5)
    @MaxLength(30)
    post?: string;

    @Field(() => Int)
    @Min(100)
    @Max(1000)
    internalPhone: number;
}

// tslint:disable-next-line:max-classes-per-file
@ArgsType()
export class TestArgs {
    @Field(type => String, {defaultValue: "default"})
    id: number;

    @Field(type => Int)
    @Min(1)
    @Max(50)
    num = 25;

    @Field({nullable: true})
    title?: string;
}