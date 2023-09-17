/* tslint:disable */
/* eslint-disable */
import { AppliesTo } from '../models/applies-to';
import { Comment } from '../models/comment';
import { CommentSourceEnum } from '../models/comment-source-enum';
import { ReservationCommentId } from '../models/reservation-comment-id';
import { ShareWithEnum } from '../models/share-with-enum';
export type ReservationComment = ReservationCommentId & {
'commentSource'?: CommentSourceEnum;
'shareWith'?: ShareWithEnum;

/**
 * Reservation comment shared with supplier
 */
'shareWithSupplier'?: Array<string>;
'Comment'?: Array<Comment>;
'AppliesTo'?: Array<AppliesTo>;
};
