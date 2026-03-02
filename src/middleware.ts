import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Si el usuario entra en la raíz (/), lo enviamos a /pt-BR
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/pt-BR', request.url));
    }
}

// Opcional: Esto hace que el middleware solo se ejecute para la raíz
export const config = {
    matcher: ['/'],
};
