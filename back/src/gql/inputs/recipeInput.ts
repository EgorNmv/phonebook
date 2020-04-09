import { Recipe } from "../types/recipeType";
import { InputType, Field } from "type-graphql";

@InputType()
export class RecipeInput implements Partial<Recipe> {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
