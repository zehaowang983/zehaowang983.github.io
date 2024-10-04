from PIL import Image

# Open an image file
with Image.open("profile.jpg") as im:
    width, height = im.size
    if width < height:
        newWidth = 512
        newHeight = int(height / (width / 512))
        cropTop = (newHeight - 512) // 2
        cropBottom = cropTop + 512
        crop = (0, cropTop, 512, cropBottom)
    else:
        newHeight = 512
        newWidth = int(width / (height / 512))
        cropLeft = (newWidth - 512) // 2
        cropRight = cropLeft + 512
        crop = (cropLeft, 0, cropRight, 512)
    imResize = im.resize((newWidth, newHeight))
    imCrop = imResize.crop(crop)
    imCrop.save("profile-512x512.jpg")
