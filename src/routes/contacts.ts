import express from 'express';
const router = express.Router();


type contactInfo = {
    name: string,
    title: string,
    picture: string,
    bio: string
}

function getContactObject() {
    let contactArray: Array<contactInfo> = [];

    contactArray.push(
        {
            name: "Raymond Velez",
            title: "Founder",
            picture: "https://media.licdn.com/dms/image/D5603AQHkO0gBX5u9SQ/profile-displayphoto-shrink_800_800/0/1675418016161?e=1690416000&v=beta&t=fqMiXNe17MgqCiJZHl2NvzC1nGqF4yPMXcLoO_rWIaI",
            bio: "Previous Experience working in Big Tech at Microsoft and then Moving onto to work on SommerAi in 2022 inspired by... "
        },
        {
            name: 'Connor McLemore',
            title: "Software Engineer",
            picture: "https://media.licdn.com/dms/image/C4E03AQEq7Ne--HkqGA/profile-displayphoto-shrink_200_200/0/1593636145643?e=1690416000&v=beta&t=j9c5KaHPxqFGyrQYzCdvssRc9RUqmv7Cm0FLR_QvEnw",
            bio: "idk m8 hes a guy who does stufffff.ff.ddfs.dsf."
        },
        
    )

    return contactArray;
}

const getContacts = () => {
    return getContactObject();
}

router.get('/', async (req:any, res:any) =>{
    res.status(200).send(getContacts());
});

export default router;
