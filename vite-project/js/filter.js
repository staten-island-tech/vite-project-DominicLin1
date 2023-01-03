import { League } from "./array.js";
export const filtermid=
League.filter((champion)=>champion.role.includes("mid"),
)
console.log(filtermid)

export const filtertop=
League.filter((champion)=>champion.role.includes("top"),
)
console.log(filtertop)

export const filterjungle =
League.filter((champion)=>champion.role.includes("jungle"),
)
console.log(filterjungle)

export const filteradc=
League.filter((champion)=>champion.role.includes("adc"),
)
console.log(filteradc)

export const filtersupport=
League.filter((champion)=>champion.role.includes("support"),
)
console.log(filtersupport)



