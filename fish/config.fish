if status is-interactive
    # Commands to run in interactive sessions can go here
end
macchina -t small
alias emacsclient="emacsclient -c -n"
alias whereisme="curl ifconfig.co/city"
starship init fish | source
