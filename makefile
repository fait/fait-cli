
define ~send-message
	$(info 📤$(shell echo $$RANDOM$$RANDOM)🏷$(strip $1)📝$(strip $2)🔚)
endef

$(eval $(call ~send-message, test, message content))
$(info hello)

all:
