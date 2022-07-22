
import axios  from "axios"



const github = axios.create({
    baseURL:process.env.REACT_APP_GITHUB_URL,
    headers:{
        // Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    }
})
        //Search for the users
      export  const searchUsers = async (text) => {
            const params = new URLSearchParams({
                q: text
            })
            // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,{
            //     headers: {
            //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            //     }
            // })
    
            // const {items} = await response.json()


            const response = await github.get(`/search/users?${params}`)

           return response.data.items
          
        }


        //fetch single user data


// export const getUser = async (username) => {
//     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${username}`,{
//         headers: {
//             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
//         }
//     })
//         if(response.status === 404){
//             window.location = '/notfound'
//         }else{
//             const data = await response.json()
//             return data
//         }
  
// }

// // fetch the repositories
// export const fetchRepos = async (username) => {
    
//     const params = new URLSearchParams({
//         sort:'created',
//         per_page:10,
//     })
//     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${username}/repos?${params}`,{
//         headers: {
//             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
//         }
//     })
//         if(response.status === 404){
//             window.location = '/notfound'
//         }else{
//             const items = await response.json()
//             return items
//         }
  
        
// }



//============================================
//using axios


export const getUserAndRepos = async(username)=> {
    const params = new URLSearchParams({
        sort:'created',
        per_page:10,
    })
    const [user, repos] = await Promise.all([

   
        github.get(`/users/${username}`),
        github.get(`/users/${username}/repos?${params}`)
    ])

return {
    user:user.data,
    repos:repos.data,
}
}