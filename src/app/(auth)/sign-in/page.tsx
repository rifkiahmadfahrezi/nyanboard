import React from "react"
import { AuthLayout } from "@/components/auth-layout"
import { SignInForm } from "@/features/sign-in/signin-form"
import { siteConfig } from "@/config/site"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in",
}

const SignInPage = () => {
  return (
    <AuthLayout title={`Sign In for ${siteConfig.name}`}>
      <SignInForm />
    </AuthLayout>
  )
}

export default SignInPage
