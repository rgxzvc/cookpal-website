'use client'

import { useState } from 'react'
import { Minus, Plus, Flame, Clock, Users } from 'lucide-react'

export function RecipeCardMock() {
  const [servings, setServings] = useState(4)

  const ingredients = [
    { emoji: '🥚', name: 'Large eggs', amount: 4 * (servings / 4) },
    { emoji: '🧈', name: 'Butter', amount: `${2 * (servings / 4)} tbsp` },
    { emoji: '🧀', name: 'Cheddar cheese', amount: `${0.5 * (servings / 4)} cup` },
    { emoji: '🧂', name: 'Salt & pepper', amount: 'to taste' },
    { emoji: '🌿', name: 'Fresh chives', amount: `${1 * (servings / 4)} tbsp` },
  ]

  const steps = [
    'Crack eggs into a bowl and whisk until smooth.',
    'Melt butter in a non-stick pan over medium-low heat.',
    'Pour in eggs, stir gently, fold in cheese when almost set.',
  ]

  return (
    <div className="w-full max-w-sm bg-white rounded-4xl shadow-soft-lg border border-neutral-100 overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-gradient-to-br from-primary-400 to-primary-500 p-6 text-white">
        <h3 className="font-display text-2xl font-bold mb-2">
          Perfect Scrambled Eggs
        </h3>
        <p className="text-primary-100 text-sm">
          Creamy, fluffy, restaurant-quality eggs
        </p>
      </div>

      {/* Quick stats */}
      <div className="flex items-center justify-between px-6 py-4 bg-primary-50/50 border-b border-primary-100">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Clock className="w-4 h-4 text-primary-500" />
          <span>10 min</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Flame className="w-4 h-4 text-primary-500" />
          <span>220 cal</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Users className="w-4 h-4 text-primary-500" />
          <span>{servings} servings</span>
        </div>
      </div>

      {/* Servings stepper */}
      <div className="px-6 py-4 border-b border-neutral-100">
        <div className="flex items-center justify-between">
          <span className="font-medium text-neutral-700">Servings</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setServings(Math.max(1, servings - 1))}
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
              aria-label="Decrease servings"
            >
              <Minus className="w-4 h-4 text-neutral-600" />
            </button>
            <span className="font-bold text-lg w-8 text-center">{servings}</span>
            <button
              onClick={() => setServings(servings + 1)}
              className="w-8 h-8 rounded-full bg-primary-100 hover:bg-primary-200 flex items-center justify-center transition-colors"
              aria-label="Increase servings"
            >
              <Plus className="w-4 h-4 text-primary-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="px-6 py-4">
        <h4 className="font-semibold text-neutral-900 mb-3">Ingredients</h4>
        <ul className="space-y-2.5">
          {ingredients.map((ingredient, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-lg">{ingredient.emoji}</span>
              <span className="flex-1 text-neutral-700">{ingredient.name}</span>
              <span className="text-sm text-neutral-500 font-medium">
                {typeof ingredient.amount === 'number'
                  ? ingredient.amount % 1 === 0
                    ? ingredient.amount
                    : ingredient.amount.toFixed(1)
                  : ingredient.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Steps preview */}
      <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100">
        <h4 className="font-semibold text-neutral-900 mb-3">Instructions</h4>
        <ol className="space-y-2">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xs">
                {i + 1}
              </span>
              <span className="text-neutral-600 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
