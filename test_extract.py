import asyncio
from content_core import extract_content

async def main():
    try:
        res = await extract_content({
            'file_path': '/home/crypto_nn/local-notebooklm/open-notebook/data/uploads/2024-CRYPTO___Revisiting-Differential-Linear-Attacks-via-a-Boomerang-Perspective.pdf',
            'output_format': 'markdown',
            'document_engine': 'auto'
        })
        print("--- EXTRACTED TEXT PREVIEW (first 500 chars) ---")
        print(res.content[:500])
        print("--- END PREVIEW ---")
    except Exception as e:
        print(f"Error extracting content: {e}")

if __name__ == "__main__":
    asyncio.run(main())
