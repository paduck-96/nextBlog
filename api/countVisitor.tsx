let visitCount: number = 0;

export default function handler(req: any, res: { status: (arg: number) => { json: { (arg: { visitCount: number; date: string; }): void}}}) {
    visitCount += 1;
    const today = new Date().toLocaleDateString()
    res.status(200).json({ visitCount, date: today})
}