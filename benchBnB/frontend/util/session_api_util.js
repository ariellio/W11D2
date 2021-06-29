export const signup = (user, pass) => (
    $.ajax ({
        url: "/api/users",
        method: "POST",
        data: {user: {user, pass}}
    })
)

export const login = (user, pass) => {
    return $.ajax ({
        url: "/api/sessions",
        method: "POST"
    })
}

export const logout = () => {
    return $.ajax ({
        url: "/api/sessions",
        method: "DELETE"
    })
}