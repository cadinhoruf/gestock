import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export const useAuthState = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const resetState = () => {
    setError('')
    setSuccess('')
    setLoading(false)
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  return {
    error,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    resetState
  }
}
