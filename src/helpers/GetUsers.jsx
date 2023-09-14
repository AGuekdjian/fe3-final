export const GetUsers = async (url, setLoading, setUsers) => {
    try {
        setLoading(true)
        const res = await fetch(url)
        const data = await res.json()
        setUsers(data)
        setLoading(false)
    } catch (error) {
        throw new Error(`Hubo un error al realizar la consulta a la api: ${url} \n${error}`)
    }
}