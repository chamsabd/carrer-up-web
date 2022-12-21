import { Session } from "./session.model";

export class Formation {
        id!: number;
        nom!: String |undefined;
        description!: String |undefined;
        category!: String | undefined;
        prix!: number| undefined;
        sessions!:Session[];

    
}
