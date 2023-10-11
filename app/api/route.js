import { queryFn } from "./db";





export async function GET() {
    const host = process.env.NEXT_PUBLIC_HOST;
    console.log(host);
    
    const data = await queryFn('SELECT * from new_table')
    
    return Response.json(data);
    
}

    // const data = await queryFn(`
    // create table contact(
    //     name varchar(30),
    //     email varchar(100),
    //     contents text,
    //     num int not null auto_increment
    //     primary key(num)
    // )
    // ` 추가하는법)

export async function POST(req) {
    const {id,name,e_mail} = await req.json();
    console.log(id,name,e_mail);
    const data = await queryFn("insert into new_table (id,name,e_mail) values (?,?,?)",[id,name,e_mail])
    return Response.json([]);
    
}

