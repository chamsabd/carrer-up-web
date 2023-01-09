import { Role } from "./role.modal";

export class User {

    id: String| undefined;
     nom: String| undefined;
 prenom: String| undefined;
 username:String| undefined;
  email:String| undefined;
  roles:Role[]| undefined;
   password!: String| undefined;
   confirmpassword:String| undefined;
   code:String | undefined;
   codeverif?:String | undefined;

}
