export const signup = () => (
    $.ajax = ({
        url: "/api/users",
        method: "POST"
    })
)

export const login = () => {
    $.ajax = ({
        url: "/api/sessions",
        method: "POST"
    })
}

export const logout = () => {
    $.ajax = ({
        url: "/api/sessions",
        method: "DELETE"
    })
}