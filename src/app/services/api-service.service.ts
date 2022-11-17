import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';

interface input {
ingredient_id: string
stock_used: number
}
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private apollo: Apollo) { }

  login(username: any, password: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
      mutation {
        getToken(
          email: "${username}"
          password:"${password}"
          ) 
          {
          message
          user{
            email
            fullName
          }
          }
      }`
    })
  }

  addIngredient(name: any, stock: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`mutation 
      Mutation{
        addIngredient(
          name: "${name}" 
          stock: ${stock}
        ) {
          name
          stock
        }
      }`
    })
  }

  createRecipe(data: any): Observable<any> {
    let a:input[] = data.input
    return this.apollo.mutate({
      mutation: gql`mutation 
      CreateRecipe( $a: [ingredientInput]){
          createRecipe(
            recipe_name: "${data.recipe_name}"
            description: "${data.description}"
            img: "${data.img}"
            price: ${data.price}
            input: $a
            ) {
            recipe_name
          }
      }`, variables: {
         a
      }
    })
  }

  updateRecipe(data: any, id: string): Observable<any> {
    let a:input[] = data.input
    return this.apollo.mutate({
      mutation: gql`mutation 
      UpdateRecipe( $a: [ingredientInput]){
          updateRecipe(
            id: "${id}"
            recipe_name: "${data.recipe_name}"
            description: "${data.description}"
            img: "${data.img}"
            price: ${data.price}
            input: $a
            ) {
            recipe_name
          }
      }`, variables: {
         a
      }
    })
  }

  updateRecipeStatus(data: any): Observable<any> {
    console.log(data.id)
    console.log(data.status)
    let a:input[] = data.input
    return this.apollo.mutate({
      mutation: gql`mutation 
      UpdateRecipe{
          updateRecipe(
            id: "${data.id}"
            status: ${data.status}
            ) {
            recipe_name
          }
      }`
    })
  }


  updateIngredient(id: any, name?: any, stock?:any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`mutation Mutation {
        updateIngredient(
          id: "${id}", 
          name: "${name}", 
          stock: ${stock}
          ) {
          name
          stock
        }
      }`
    })
  }

  getActiveMenu() {
    return this.apollo.watchQuery({
      query: gql`query GetActiveMenu {
        getActiveMenu {
          data {
            available
            recipe_name
            description
            ingredients {
              ingredient_id {
                name
              }
            }
            price
            img
          }
        }
      }`
    })
  }

  getAllRecipes() {
    return this.apollo.watchQuery({
      query: gql`query GetAllRecipes {
        getAllRecipes {
          data {
            id
            available
            recipe_name
            description
            ingredients {
              ingredient_id {
                name
                id
              }
              stock_used
            }
            price
            img
            status
          }
        }
      }`
    })
  }

  deleteIngredient(id: any): Observable<any> {
    console.log(id)
    return this.apollo.mutate({
      mutation: gql`mutation Mutation
      {
        deleteIngredient(
          id:"${id}"
          ) 
        {
          message
        }
      }`
    })
  }


  getAllIngredients() {
    return this.apollo.watchQuery({
      query: gql`query {
        getAllIngredient {
          data {
            id
            name 
            status
            stock
          }
        }
      }`
    })
  }



  extractIngredients(data: Array<any>) {
    let ingredients: Array<string> = []
    for (let a of data) {
      let x = ''
      for (let b of a.ingredients) {
        if (x == '') {
          x = b.ingredient_id.name;
        }
        else {
          x = x + ', ' + b.ingredient_id.name;
        }
      }
      ingredients.push(x)
    }
    return ingredients
  }

}
