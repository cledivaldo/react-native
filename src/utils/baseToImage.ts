export function base64ToImage(
	base64String: string,
	altText = "Imagem Convertida",
	defaultImageUrl = "/avatar.png", // Caminho da imagem default
): HTMLImageElement {
	// Cria um elemento <img>
	const img = new Image();
	img.alt = altText;
	img.style.maxWidth = "100%";
	img.style.height = "auto";
	img.style.borderRadius = "50%"; // Torna a imagem redonda
	img.style.objectFit = "cover"; // Garante que a imagem se ajuste bem ao tamanho
	img.style.backgroundColor = "transparent"; // Garante fundo transparente

	try {
		// Testa o Base64 criando um objeto temporário
		const testImage = new Image();
		testImage.src = `data:image/png;base64,${base64String}`;
		testImage.onload = () => {
			img.src = testImage.src; // Se carregar, usa o Base64
			// Aplica filtro de cor (como exemplo)
			img.style.filter = "hue-rotate(180deg)"; // Exemplo de alteração de cor
		};
		testImage.onerror = () => {
			throw new Error("Base64 inválido");
		};
	} catch (error) {
		console.error("Erro ao converter Base64:", error);
		img.src = defaultImageUrl; // Usa a imagem default
	}

	return img;
}
