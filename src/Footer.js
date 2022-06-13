import React from 'react';

export const Footer = () => {
	const d = new Date();

	return (
		<>
			<footer>
				<h3>
					{`<gronedev/>`}@{d.getFullYear()}
				</h3>
			</footer>
		</>
	);
};
