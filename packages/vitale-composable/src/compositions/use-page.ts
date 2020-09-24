export type PageInit = {
  
}

export type PageInfo = {

}

export type Page = {
  info: PageInfo,

}

export type UsePageInit = Function | PageInit

export const from = (init?: UsePageInit): PageInit => {
  return {

  }
}

export const usePage = (init?: UsePageInit) => {
  const pageInit = from(init)

  if (pageInit) {

  }

  return {

  }
}
