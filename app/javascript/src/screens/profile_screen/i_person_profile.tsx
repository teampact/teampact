import { IPersonCraft } from "./i_person_craft";
import { IPersonOrganization } from "./i_person_organization";

export interface IPersonProfile {
  crafts: IPersonCraft[];
  email: string;
  name: string;
  organizations: IPersonOrganization[];
  photo: string;
  representation: string;
}
