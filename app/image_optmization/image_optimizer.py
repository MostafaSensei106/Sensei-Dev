import os
import sys
from PIL import Image
from colorama import init, Fore, Style
from tqdm import tqdm
import shutil

init(autoreset=True)

def print_fancy_header():
    header = """
    ╔═══════════════════════════════════════════════════════════╗
    ║       Sensei's Advanced Image Compression Tool v2.0       ║
    ║             for Professional Art Galleries                ║
    ╠═══════════════════════════════════════════════════════════╣
    ║              Developed by: Mostafa Sensei106              ║
    ╚═══════════════════════════════════════════════════════════╝
    """
    print(Fore.CYAN + header)

def print_message(message, color=Fore.WHITE, bold=False):
    style = Style.BRIGHT if bold else ""
    print(style + color + message)

def get_compression_quality():
    print_message("Would you like to set a custom quality? (y/n) [default is 80%]: ", Fore.CYAN)
    choice = input(">> ").strip().lower()

    if choice == 'y':
        print_message("Select compression quality:", Fore.CYAN)
        qualities = ["Leave as is (80%)", "80%", "60%", "40%", "20%"]
        for i, quality in enumerate(qualities, 1):
            print_message(f"{i} - {quality}", Fore.YELLOW)

        while True:
            try:
                quality_choice = int(input(">> "))
                if 1 <= quality_choice <= 5:
                    return 80 if quality_choice <= 2 else [80, 60, 40, 20][quality_choice - 2]
                print_message("Invalid choice. Please select a number between 1 and 5.", Fore.RED)
            except ValueError:
                print_message("Please enter a valid number.", Fore.RED)

    return 80

def process_images(input_dir, output_dir, compression_quality):
    image_entries = []
    total_files = len([f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))])

    with tqdm(total=total_files, desc="Processing Images", unit="image") as pbar:
        for filename in os.listdir(input_dir):
            file_path = os.path.join(input_dir, filename)

            if not os.path.isfile(file_path):
                continue

            try:
                with Image.open(file_path) as image:
                    webp_filename = os.path.splitext(filename)[0] + ".webp"
                    webp_path = os.path.join(output_dir, webp_filename)

                    image.save(webp_path, "webp", quality=compression_quality)

                    image_entries.append(f"""        {{
            src: "/Assets/art-gallery/Images/image_display/{filename}",
            thumb: "/Assets/art-gallery/Images/web/{webp_filename}"
        }},""")

                pbar.update(1)
                pbar.set_postfix_str(f"Processed: {filename}")

            except Exception as e:
                print_message(f"❌ Error processing '{filename}': {e}", Fore.RED)

    return image_entries

def create_output_file(output_text_path, image_entries):
    with open(output_text_path, 'w') as file:
        file.write("const images = useMemo(() => [\n")
        for i, entry in enumerate(image_entries):
            file.write(f"{entry}\n")
            if i < len(image_entries) - 1:
                file.write("    // Next image...\n")
        file.write("], []);\n")

def main():
    print_fancy_header()

    base_dir = os.path.dirname(os.path.abspath(__file__))
    input_dir = os.path.join(base_dir, '../../public/Assets/art-gallery/Images/image_display')
    output_dir = os.path.join(base_dir, '../../public/Assets/art-gallery/Images/web')

    if not os.path.exists(input_dir):
        os.makedirs(input_dir)
        print_message(f"⚠️ Warning: The input directory '{input_dir}' was not found, so it has been created.", Fore.YELLOW)
        print_message("Please place images inside 'image_display' and run the script again.", Fore.YELLOW)
        sys.exit(1)

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print_message(f"The output directory '{output_dir}' has been created.", Fore.GREEN)
    else:
        print_message(f"The output directory '{output_dir}' already exists.", Fore.CYAN)

    compression_quality = get_compression_quality()

    if not os.listdir(input_dir):
        print_message(f"The directory '{input_dir}' is empty. Please add images and run the script again.", Fore.YELLOW)
        sys.exit(1)

    print_message("Starting the image compression and conversion process...", Fore.GREEN, bold=True)

    image_entries = process_images(input_dir, output_dir, compression_quality)

    output_text_path = os.path.join(base_dir, '../../app/com/art_gallery/sensei-art.txt')
    print_message(f"Creating the text file at: {output_text_path}", Fore.CYAN)
    create_output_file(output_text_path, image_entries)

    print_message(f"Images have been optimized and saved to: {output_dir}", Fore.GREEN)
    print_message("The image paths file has been created successfully!", Fore.GREEN)
    print_message("Please copy 'sensei-art.txt' into 'app/com/art_gallery/sensei-art.tsx'", Fore.CYAN)

    destination_path = os.path.join(base_dir, '../../app/com/art_gallery/sensei-art.tsx')
    try:
        shutil.copy2(output_text_path, destination_path)
        print_message("The file has been automatically copied to 'sensei-art.tsx'!", Fore.GREEN, bold=True)
    except Exception as e:
        print_message(f"Unable to copy file automatically: {e}", Fore.YELLOW)
        print_message("Please copy the file manually as instructed above.", Fore.YELLOW)

    print_message("Process completed successfully!", Fore.GREEN, bold=True)

if __name__ == "__main__":
    main()