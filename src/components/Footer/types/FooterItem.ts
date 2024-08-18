export interface Contact {
    id: number,
    type: string,
    detail: string
}

export interface CopyRight {
    id: number,
    description: string
}

export interface FooterItems {
    contacts: Contact[],
    copyRights: CopyRight[]
}