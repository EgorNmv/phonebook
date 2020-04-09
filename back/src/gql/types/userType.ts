import {Field, ObjectType, Int, Float} from "type-graphql";

@ObjectType({description: "Object representing user"})
export class UserType {
    @Field(() => Int)
    id: number;

    @Field()
    firstName: string;

    @Field()
    secondName: string;

    @Field(() => Float)
    phone: number;

    @Field(() => Int)
    cabinet: number;

    @Field({nullable: true})
    post?: string;

    @Field(() => Int)
    internalPhone: number;
}