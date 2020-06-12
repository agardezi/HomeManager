const headers = { 'Content-Type': 'application/json' }

const baseurl = "192.168.86.39"
const localurl= "192.168.0.42"


export function getConfigFile(){
    console.log("getConfigFile")
    return (
        fetch('http://'+baseurl+':8081/getConfigModules').then(response => response.json())
    )
}

export function updateConfigFile(updatedFile){
    fetch('http://'+baseurl+':8081/updateConfigModules',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(updatedFile).toString()
    })


}

//192.168.86.60:8081/