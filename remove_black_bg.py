from PIL import Image

def remove_black_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # threshold for black pixels
    threshold = 12 

    for item in datas:
        # item is (r, g, b, a)
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            # make pixel transparent
            newData.append((0, 0, 0, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

if __name__ == "__main__":
    input_file = r"C:\Users\rajde\.gemini\antigravity-ide\brain\8f40c093-d387-42af-a690-acbe7912ce26\media__1780117778977.jpg"
    output_file = r"C:\Users\rajde\Downloads\Raj Portfoli\public\raj-portrait.png"
    remove_black_background(input_file, output_file)
