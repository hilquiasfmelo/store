'use client'

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet'
import { Card } from './card'
import { Button } from './button'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Separator } from './separator'

export function Header() {
  const { data, status } = useSession()

  const isAuthenticated = status === 'authenticated'

  async function handleLoginGoogle() {
    await signIn()
  }

  async function handleLogoutGoogle() {
    await signOut()
  }

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {isAuthenticated && data?.user && (
            <div className="flex-flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>

                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">
                    👋 Olá! <p className="inline text-xs">Seja Bem-Vindo(a)</p>
                  </p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {isAuthenticated ? (
              <Button
                onClick={handleLogoutGoogle}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Fazer logout
              </Button>
            ) : (
              <Button
                onClick={handleLoginGoogle}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer login
              </Button>
            )}

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        Store <span className="text-primary">FSW</span>
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}
