export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'endlemal',
    avatar: '',
    username: 'endlemal',
    title: '于慧中的左护法',
    desc: '开发者，专注于基础设施维护，数据分析，后端、DevOps 开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/nekomeowww' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
    ],
    nameAliases: ['nekomeowww', 'endlernal', 'endlernal', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['neko@ayaka.moe'],
  },
  {
    name: 'happykl-cn',
    avatar: '',
    username: 'happykl-cn',
    title: '于慧中的右护法',
    desc: '开源开发者，专注于前端，以及前端相关工具库和工具链开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/LittleSound' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/OikawaRizumu' },
    ],
    nameAliases: ['LittleSound', '小恐龙', '小恐龍', 'Rizumu Oikawa', 'Rizumu Ayaka', 'Ayaka Rizumu', 'Rizumu'],
    emailAliases: ['rizumu@ayaka.moe', 'rizumu@oqo.moe'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
