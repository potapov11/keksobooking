const IMAGES_TYPES = ['jpg', 'jpeg', 'png'];

const initImageShow = (inputItem, previewItem) => {
  const previewSrc = previewItem.src;

  inputItem.addEventListener('change', () => {
		console.log(inputItem.files)
    const file = inputItem.files[0];
    const fileName = file.name.toLowerCase();
    const match = IMAGES_TYPES.some((name) => fileName.endsWith(name));

    if (match) {
      previewItem.src = URL.createObjectURL(file);
    } else {
      previewItem.src = previewSrc;
    }
  });

  return () => (previewItem.src = previewSrc);
};

export { initImageShow };
