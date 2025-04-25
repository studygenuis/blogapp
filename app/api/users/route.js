import { NextResponse } from "next/server";
import { users } from '../../../data/users'

// export const GET = async () => {
//     try {
//         return NextResponse.json(users, {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' }
//         })
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' }
//         })
//     }
// }

export const POST = async (request) => {
    const body = await request.json()
    const { email } = body
    const { password } = body

    const user = users.some(user => user.email === email && user.password === password)

    if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        })
    }

    const theUser = users.find(user => user.email === email)

    return NextResponse.json(theUser, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}