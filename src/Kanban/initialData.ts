import { AttachmentType, CardFieldsType, CardType, ColumnType } from './Kanban.types'

export const initialColumns: ColumnType[] = [
  { name: 'Open', color: '#F9D8D6' },
  { name: 'In Progress', color: '#F9EBDF' },
  { name: 'Published', color: '#EFF9DA' },
]

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum risus quis sollicitudin pellentesque. Ut laoreet posuere velit at ultricies. Phasellus dapibus nisi at odio consectetur malesuada. Aenean viverra dictum ante id viverra. Vestibulum interdum efficitur vestibulum. Nulla venenatis nibh at lacus auctor pharetra. Morbi luctus pellentesque elit nec semper. Donec in leo id nisi scelerisque semper. Phasellus eu lacus eget libero vestibulum dapibus vel quis mauris. In fringilla nunc nisl, vel tincidunt sapien aliquet sed. In eu magna eu ante blandit faucibus. Nunc et nisi eu tellus pretium venenatis interdum ut nisl.'
const attachment: AttachmentType = { title: 'Design in Figma', type: 'link', url: 'https://share.figma.xyz/fake-design' }
export const initialCards: CardType[] = [
  { description, attachment, id: '1', title: 'Implement sign-up page', publishDate: '2022-02-14', columnName: 'Published' },
  { description, attachment, id: '2', title: 'Implement sign-in page', publishDate: '2022-02-18', columnName: 'Published' },
  { description, attachment, id: '3', title: 'Implement edit-profile page', publishDate: '2022-03-09', columnName: 'In Progress' },
  { description, attachment, id: '4', title: 'Implement create-content page', publishDate: '2022-03-14', columnName: 'In Progress' },
  { description, attachment, id: '5', title: 'Implement edit-content page', publishDate: '2022-03-15', columnName: 'Open' },
  { description, id: '6', title: 'Implement user-contents page', publishDate: '2022-03-18', columnName: 'Open' },
  { description, id: '7', title: 'Implement delete-content functionality', publishDate: '2022-03-19', columnName: 'Open' }
]

export const initialCardFields: CardFieldsType = {
  title: true,
  description: true,
  publishDate: true,
  attachment: true,
}
