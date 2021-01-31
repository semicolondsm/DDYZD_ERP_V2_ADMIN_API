import { Club, Tag } from "../../models";

export default interface ClubHasTagRepository {
    createTag(club: Club, tag: Tag): Promise<void>;
    tagExistError(club: Club, tag: Tag): void;
}