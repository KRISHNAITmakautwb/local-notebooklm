import asyncio
from surrealdb import Surreal

async def main():
    async with Surreal("ws://127.0.0.1:8000/rpc") as db:
        await db.signin({"user": "root", "pass": "root"})
        await db.use("open_notebook", "open_notebook")
        
        # Delete the insight
        await db.query("DELETE source_insight:kvelhezvcctsqjasxcxo;")
        print("Deleted bad insight.")
        
        # We can also check if there are other insights for this source
        res = await db.query("SELECT * FROM source_insight WHERE source = source:0dy85fkotl2cdcens0af")
        print("Remaining insights:", res)

if __name__ == "__main__":
    asyncio.run(main())
