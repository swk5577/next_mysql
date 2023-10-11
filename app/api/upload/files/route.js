import {queryFn} from '../../db'

export async function GET() {
    const q = `select * from imge_fils`
    const data = await queryFn(q)

  return Response.json(data);
}
export async function POST(req) {
    const {title,imgUrl} = await req.json();
    const q = `insert into imge_fils (title,imgUrl) values (?,?)`
    // const imgUrl = req.nextUrl.searchParams.get('imgUrl') - 파람스로 받을때
    console.log(title,imgUrl);
    await queryFn(q,[title,imgUrl])

    return Response.json({done:"따란~"})
  }
