export interface ColumnType {
  name: string
  color: string
}

export interface AttachmentType {
  title: string
  type: 'file' | 'link'
  url: string
}

export interface CardType {
  id: string
  title: string
  description: string
  publishDate: string
  attachment?: AttachmentType
  columnName: ColumnType['name']
}

export interface CardFieldsType {
  title: boolean
  description: boolean
  publishDate: boolean
  attachment: boolean
}
