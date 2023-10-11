import { queryFn } from "../db";


export async function DELETE(req, {params}){   
    await queryFn(`delete from new_table where num=?`,[params.num])
    const data = await queryFn('select * from new_table');
    return Response.json(data);
}


export async function PUT(req, {params}){
    const data = await req.json();
    const upDate = await queryFn(`update new_table set name=? where num = ?`,[data.name,params.num])

    const getData = await queryFn('select * from new_table');

    return Response.json(getData);

}