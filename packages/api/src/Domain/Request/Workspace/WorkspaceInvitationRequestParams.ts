import { Uuid } from '@standardnotes/common'

export type WorkspaceInvitationRequestParams = {
  workspaceUuid: Uuid
  inviteeEmail: string
  accessLevel: string
  [additionalParam: string]: unknown
}