import sanityClient, { SanityClient } from '@sanity/client';

const client =sanityClient({
    projectId: "htqolna8",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
    token:
		'skOB5bbnygs7TL5UK6nPxcYnDZZhm2SxmM2rxGXeAtb7o64FMdhTWRCu9aoAp11QfVShNVbWs7riNj6KVqgsdtJ8yAVekNSrpNG9ENUcQ8Zdt3A4rdND0tHpCSIfvOun5c0Up7MHpPCZjGoJVmlD2hL0G6vy2L8Cz0Ki9c2XB2LatZeQT2xz',
})



export async function load({}) {
    const data = await client.fetch(`*[_type == "spill"]`)

        
        if (data) {

            return {
                spill: data
            }
            
        }
        
        return {
            status : 500,
            body:new Error("error")
        }


}
