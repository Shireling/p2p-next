import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET(request: Request) {
  const jsonDirectory = path.join(process.cwd(), 'src/data')
  const res = await fs.readFile(jsonDirectory + '/payments.json', 'utf8')
  const payments = JSON.parse(res)

  return NextResponse.json({payments})
}
