import { ISSUE_STATE } from '../model/issue.interfaces';
import { SEARCH_QUERY_TEMPLATE } from './constants';

export type IIssueQuery = {
    isOpen?: boolean
    isClosed?: boolean
    organization?: string
    repository?: string
    searchValue: string
}

export const issuesQueryGen = (params: IIssueQuery): string => {
    const { isOpen, repository, searchValue, isClosed, organization } = { ...params }

    let issueState = 'is:'
    if (isOpen && !isClosed) {
        issueState += ISSUE_STATE.OPEN
    } else if (isClosed && !isOpen) {
        issueState += ISSUE_STATE.CLOSED
    } else {
        issueState = ''
    }

    const searchQuery = searchValue ? `\"${searchValue}\"` : '';

    return `repo:${organization}/${repository} ${SEARCH_QUERY_TEMPLATE} ${issueState} ${searchQuery}`
}
