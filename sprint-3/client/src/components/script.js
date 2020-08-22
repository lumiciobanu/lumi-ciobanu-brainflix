const getDateStringServ = timestamp => {

    const plus0 = num => `0${num.toString()}`.slice(-2)
    const d = new Date(timestamp)
    const year = d.getFullYear()
    const monthTmp = d.getMonth() + 1
    const month = plus0(monthTmp)
    const date = plus0(d.getDate())
      
    return `${month}/${date}/${year}`
  }

  export default getDateStringServ;