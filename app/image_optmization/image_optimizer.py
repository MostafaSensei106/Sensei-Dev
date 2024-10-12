import os
from PIL import Image
from colorama import init, Fore, Style

# Initialize colorama
init(autoreset=True)

def print_welcome():
    print(Fore.CYAN + "===================================")
    print(Fore.CYAN + " Welcome to Sensei's Image Compression Tool for Art Gallery ")
    print(Fore.GREEN + " Developed by: Mostafa Sensei106 ")
    print(Fore.CYAN + "===================================")

def print_message(message, color=Fore.WHITE):
    print(color + message)

def get_compression_quality():
    print(Fore.CYAN + "Would you like to set a custom quality? (y/n) [default is 80%]: ")
    choice = input(">> ").strip().lower()

    if choice == 'y':
        print(Fore.CYAN + "Select compression quality:")
        print(Fore.YELLOW + "1 - Leave as is (80%)")
        print(Fore.YELLOW + "2 - 80%")
        print(Fore.YELLOW + "3 - 60%")
        print(Fore.YELLOW + "4 - 40%")
        print(Fore.YELLOW + "5 - 20%")

        while True:
            try:
                quality_choice = int(input(">> "))
                if quality_choice == 1:
                    return 80
                elif quality_choice == 2:
                    return 80
                elif quality_choice == 3:
                    return 60
                elif quality_choice == 4:
                    return 40
                elif quality_choice == 5:
                    return 20
                else:
                    print(Fore.RED + "Invalid choice. Please select a number between 1 and 5.")
            except ValueError:
                print(Fore.RED + "Please enter a valid number.")

    return 80  # Default quality

# Define the base paths
base_dir = os.path.dirname(os.path.abspath(__file__))
input_dir = os.path.join(base_dir, '../../public/Assets/art-gallery/Images/image_display')
output_dir = os.path.join(base_dir, '../../public/Assets/art-gallery/Images/image_web')

# Welcome message
print_welcome()

# Check and create input directory if not exists
if not os.path.exists(input_dir):
    os.makedirs(input_dir)
    print_message(f"⚠️ Warning: The input directory '{input_dir}' was not found, so it has been created.", Fore.YELLOW)
    print_message("Please place images inside 'image_display' and run the script again.", Fore.YELLOW)
    exit()

# Ensure the output directory exists
if not os.path.exists(output_dir):
    os.makedirs(output_dir)
    print_message(f"The output directory '{output_dir}' has been created.", Fore.GREEN)
else:
    print_message(f"The output directory '{output_dir}' already exists.", Fore.CYAN)

# Get compression quality from user
compression_quality = get_compression_quality()

# Initialize list to store image paths
image_entries = []

# Process images if any are available
if not os.listdir(input_dir):
    print_message(f"The directory '{input_dir}' is empty. Please add images and run the script again.", Fore.YELLOW)
else:
    print_message("Starting the image compression and conversion process...", Fore.GREEN)

    for filename in os.listdir(input_dir):
        file_path = os.path.join(input_dir, filename)

        # Check if the file is an image
        try:
            with Image.open(file_path) as image:
                # Prepare the output filename and path for the WebP format
                webp_filename = os.path.splitext(filename)[0] + ".webp"
                webp_path = os.path.join(output_dir, webp_filename)

                # Save the image in WebP format with the specified quality
                image.save(webp_path, "webp", quality=compression_quality)
                print_message(f"✅ Optimized '{filename}' and saved as '{webp_filename}'", Fore.CYAN)

                # Add formatted paths for the image entry
                image_entries.append(f"        {{\n            src: \"/Assets/art-gallery/Images/image_display/{filename}\",\n            thumb: \"/Assets/art-gallery/Images/image_web/{webp_filename}\"\n        }},")

        except Exception as e:
            print_message(f"❌ Error processing '{filename}': {e}", Fore.RED)

    # Write the image paths to a text file
    output_text_path = os.path.join(base_dir, '../../app/com/art_gallery/sensei-art.txt')
    print_message(f"Creating the text file at: {output_text_path}", Fore.CYAN)
    with open(output_text_path, 'w') as file:
        file.write("const images = useMemo(() => [\n")
        for i, entry in enumerate(image_entries):
            file.write(f"{entry}\n")
            if i < len(image_entries) - 1:
                file.write("    // Next image...\n")
        file.write("], []);\n")

    print_message(f"Images have been optimized and saved to: {output_dir}", Fore.GREEN)
    print_message("The image paths file has been created successfully!", Fore.GREEN)
    print_message("Please copy 'sensei-art.txt' into 'app/com/art_gallery/sensei-art.tsx'", Fore.CYAN)
    print_message("Process completed successfully!", Fore.GREEN)
