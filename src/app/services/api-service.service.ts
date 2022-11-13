import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

interface ICreateData {
  ref: string
  title: string
  sub_title: string
  description: string
  image_url: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 
  constructor(
    private apollo: Apollo
  ) {
  }

  getAllPromos(){
    return this.apollo.watchQuery({
      query: gql `query{
        GetAllPromos {
          image_url
          title
          sub_title
          ref
          description
        }
      }`
    })
  }

  

  getAllSchools(): Observable<any>{
    return this.apollo.query({
      query: gql `query{
        GetAllSchools (pagination : { limit: 10, page: 0 }){
          short_name
          long_name
          status
        }
      }`
    })
  }

  getUserByName(name: string): Observable<any>{
    return this.apollo.query({
      query: gql `query($name: String){
        GetAllUsers (
          pagination : { limit: 200, page: 0 },
          last_name : $name
        ){
          first_name
          last_name
          profile_picture
          sex
          office_phone
          
        }
      }`,
      variables: {
        name
      }
    })
  }

  createPromo(data: ICreateData): Observable<any>{

    let title = data.title
    let sub_title = data.sub_title
    let description = data.description
    let image_url = data.image_url
    let ref = data.ref

    // return this.apollo.mutate({
    //   mutation: gql `mutation(
    //     $ref: String
    //     $title: String
    //     $sub_title: String
    //     $description: String
    //     $image_url: String
    //   ){
    //     CreatePromo(
    //       promo_input: {
    //         ref: $ref
    //         title: $title
    //         sub_title: $sub_title
    //         description: $description
    //         image_url: $image_url
    //       })
    //     {
    //       _id
    //     }
    //   }`,
    //   variables: {
    //     ref, title, sub_title, description, image_url,
    //   }
    // })
    return this.apollo.mutate({
      mutation: gql `mutation($data: PromoInput){
        CreatePromo(promo_input: $data){
          _id
        }
      }`,
      variables: {
         data
      }
    })
  }
}
