import { login } from '../../../utils/db/account-manager'

export default async (req, res) => {
    await authenticate(req,res)
}
