/**
 * Highlights search terms in HTML text while preserving HTML structure
 * @param html - The HTML text to highlight
 * @param query - The search query
 * @returns HTML with highlighted matches wrapped in <mark> tags
 */
export function highlightSearchTerms(html: string, query: string): string {
	if (!query.trim()) return html;

	// Parse search query for operators
	const hasOperators = query.includes('&') || query.includes('|');

	let searchTerms: string[] = [];
	if (hasOperators) {
		// Split by | first (OR has lower precedence)
		const orGroups = query.split('|').map((orTerm) => orTerm.trim());

		// Collect all unique search terms
		const allTerms = new Set<string>();
		orGroups.forEach((orGroup) => {
			const andTerms = orGroup
				.split('&')
				.map((term) => term.trim())
				.filter((t) => t);
			andTerms.forEach((term) => allTerms.add(term));
		});
		searchTerms = Array.from(allTerms);
	} else {
		searchTerms = [query.toLowerCase()];
	}

	// If no search terms, return original HTML
	if (searchTerms.length === 0) return html;

	// Create a DOM parser to work with HTML structure
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, 'text/html');

	// Function to recursively process text nodes
	function processTextNodes(node: Node): void {
		if (node.nodeType === Node.TEXT_NODE) {
			const textContent = node.textContent || '';

			// Create a single regex pattern that matches all search terms
			// This ensures we process all terms in one pass, avoiding matching against
			// HTML markup introduced by previous replacements
			const escapedTerms = searchTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
			const combinedPattern = escapedTerms.join('|');
			const regex = new RegExp(`(${combinedPattern})`, 'gi');

			const highlightedText = textContent.replace(
				regex,
				'<mark class="bg-yellow-300 text-gray-900">$1</mark>'
			);

			// If text was modified, replace the node
			if (highlightedText !== textContent) {
				const tempDiv = document.createElement('div');
				tempDiv.innerHTML = highlightedText;
				// Replace the text node with the highlighted content
				while (tempDiv.firstChild) {
					node.parentNode?.insertBefore(tempDiv.firstChild, node);
				}
				node.parentNode?.removeChild(node);
			}
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			// Recursively process child nodes
			const childNodes = Array.from(node.childNodes);
			childNodes.forEach(processTextNodes);
		}
	}

	// Process all text nodes in the document
	processTextNodes(doc.body);

	// Return the HTML content
	return doc.body.innerHTML;
}
