import React from 'react';

export const Footer = () => {
	const d = new Date();

	return (
		<>
			<footer>
				<p>
					{`<gronedev/>`}@{d.getFullYear()}
				</p>
			</footer>
		</>
	);
};
