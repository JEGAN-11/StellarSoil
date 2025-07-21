import React from 'react';

const buttonVariants = {
  primary: 'bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white',
  secondary: 'bg-white hover:bg-gray-50 focus:ring-green-500 text-gray-700 border border-gray-300',
  danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
  warning: 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 text-white',
  success: 'bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

export function ModalFooter({
  primaryAction,
  secondaryAction,
  align = 'right',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
}) {
  const footerAlignment = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between',
  };

  return (
    <div className={`mt-6 sm:mt-8 sm:flex ${footerAlignment[align]} gap-3`}>
      {secondaryAction && (
        <button
          type="button"
          className={`w-full sm:w-auto mb-3 sm:mb-0 inline-flex justify-center rounded-lg font-semibold
            ${buttonSizes[size]}
            ${buttonVariants.secondary}
            focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          onClick={secondaryAction.onClick}
          disabled={disabled || loading}
        >
          {secondaryAction.icon && (
            <span className="-ml-1 mr-2 h-5 w-5">{secondaryAction.icon}</span>
          )}
          {secondaryAction.label}
        </button>
      )}
      {primaryAction && (
        <button
          type="button"
          className={`w-full sm:w-auto inline-flex justify-center items-center rounded-lg font-semibold
            ${buttonSizes[size]}
            ${buttonVariants[variant]}
            focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          onClick={primaryAction.onClick}
          disabled={disabled || loading}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </>
          ) : (
            <>
              {primaryAction.icon && (
                <span className="-ml-1 mr-2 h-5 w-5">{primaryAction.icon}</span>
              )}
              {primaryAction.label}
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default ModalFooter;
